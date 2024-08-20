from flask import Blueprint, jsonify
from random import random
from .exc import DashException
from .utils import success_response
import psutil

bp = Blueprint('loadavg', __name__, url_prefix='/api')

@bp.route('/loadavg', methods=['GET'])
def getLoadAvg():
  (load1m, load5m, load15m) = psutil.getloadavg()
  rst = {
    'load1m': load1m,
    'load5m': load5m,
    'load15m': load15m
  }
  return jsonify(success_response(rst))
