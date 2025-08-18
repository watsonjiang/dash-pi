"""
认证模块.
"""
from dataclasses import dataclass

from flask import Flask, Blueprint, redirect, url_for, request, jsonify
from flask_login import UserMixin, LoginManager, login_required, logout_user, login_user, current_user

from .exc import DashException
from .utils import success_response


@dataclass
class DashUser(UserMixin):
    id: str
    name: str


login_manager = LoginManager()


@login_manager.user_loader
def load_user(user_id):
    return DashUser(user_id, 'watson') if user_id == '1' else None


bp = Blueprint('auth', __name__, url_prefix='/')


@bp.route('login', methods=['POST'])
def login():
    credential = request.get_json()
    if credential['username'] == 'watson' and credential['password'] == '123456':
        login_user(DashUser('1', 'watson'))
        return jsonify(success_response(None))
    raise DashException(401, 'Unauthorized', 'name or password not correct.')


@bp.route('logout', methods=['POST'])
@login_required
def logout():
    logout_user()
    return redirect(url_for("/"))


@bp.route('me', methods=['GET'])
@login_required
def me():
    return jsonify(success_response({
        "name": current_user.name
    }))


def bind_auth(app: Flask):
    login_manager.init_app(app)
    app.register_blueprint(bp)
