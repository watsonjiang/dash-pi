from flask import Blueprint, jsonify
from random import random
from .exc import DashException
from .utils import success_response


bp = Blueprint('loadavg', __name__, url_prefix='/api')

@bp.route('/loadavg', methods=['GET'])
def getLoadAvg():
  rst = {
    'load1m': random(),
    'load5m': random(),
    'load10m': random()
  }
  return jsonify(success_response(rst))
