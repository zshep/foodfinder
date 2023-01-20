from flask import Flask
from app.routes import home
from app.db import init_db


def create_app(test_config=None):
  # set up app config
  app = Flask(__name__, static_url_path='/')
  app.url_map.strict_slashes = False
  app.config.from_mapping(
    SECRET_KEY='super_secret_key'
  )

# first route
  @app.route('/welcome')
  def welcome():
    return 'Welcome Shep'
  app.register_blueprint(home)

  init_db(app)

  return app