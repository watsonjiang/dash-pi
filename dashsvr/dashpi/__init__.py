import json

from flask import Flask, send_from_directory
from flask_session import Session

from .auth import bind_auth
from .exc import DashException


def handle_dash_exc(e:DashException):
    rst = {
        'code': e.biz_code,
        'msg': e.msg,
        'data': e.data
    }
    return json.dumps(rst), e.code


def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    app.config['SECRET_KEY'] = b"1233221"
    app.config['SESSION_COOKIE_NAME'] = 'dash_session'
    app.config['SESSION_PERMANENT'] = False
    app.config['SESSION_TYPE'] = 'filesystem'
    Session(app)
    bind_auth(app)
    app.register_error_handler(DashException, handle_dash_exc)

    from . import metrics
    app.register_blueprint(metrics.bp)

    @app.route('/static/js/<path:path>')
    def js(path):
        return send_from_directory('../static/static/js', path)
    
    @app.route('/static/css/<path:path>')
    def css(path):
        return send_from_directory('../static/static/css', path)

    @app.route('/<path:path>')
    def index(path):
        return send_from_directory('../static', 'index.html')

    return app