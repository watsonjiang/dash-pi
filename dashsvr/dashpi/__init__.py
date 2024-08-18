from flask import Flask
from .exc import DashException
import json

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

    app.register_error_handler(DashException, handle_dash_exc)

    from . import loadavg
    app.register_blueprint(loadavg.bp)

    return app