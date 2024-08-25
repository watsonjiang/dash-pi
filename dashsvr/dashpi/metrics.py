from flask import Blueprint, jsonify
from .utils import success_response
import psutil

bp = Blueprint('loadavg', __name__, url_prefix='/api')

@bp.route('/load_avg', methods=['GET'])
def getLoadAvg():
  (load1m, load5m, load15m) = psutil.getloadavg()
  rst = {
    'load1m': load1m,
    'load5m': load5m,
    'load15m': load15m
  }
  return jsonify(success_response(rst))

@bp.route('/cpu_times', methods=['GET'])
def getCpuTimes():
  cpu_times = psutil.cpu_times()
  rst = {
    'user': cpu_times.user,
    'system': cpu_times.system,
    'idle': cpu_times.idle
  }
  return jsonify(success_response(rst))
  