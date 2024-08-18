from werkzeug.exceptions import HTTPException

class DashException(HTTPException):
  code = 500
  description = 'internal error'
  def __init__(self, code, msg, data):
    self.biz_code = code
    self.msg = msg
    self.data = data
    

    