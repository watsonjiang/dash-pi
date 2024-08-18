
from typing import Any

CODE_SUCCESS = 0

def make_response(code:int, msg:str, data:Any):
  return {
    'code': code,
    'msg': msg,
    'data': data
  }
  
def success_response(data):
  return make_response(CODE_SUCCESS, 'success', data)