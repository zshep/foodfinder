from flask import Blueprint, jsonify, render_template
from app.models import Food
from app.db import get_db
from sqlalchemy.sql.expression import func, select
import sys

bp = Blueprint('home', __name__, url_prefix='/')

# my first route??? does it always have to be index. 
@bp.route('/')
def index():
        
    return render_template(
      'main.html',
    )

# route to get all the food items
@bp.route('/food')
def getFooditems():
  #get one random food item post
  db = get_db()
  
  try:
    print('starting query')
    food = db.query(Food).all()
    print('about to send query to front end')
  except:
    print('something went wrong with random query')
    print(sys.exc_info()[0])
  
  print('we got to return statement')
  return render_template('main.html',
  food=food)


    #adding in errorhandler
@bp.route('/*')
@bp.errorhandler(404)
def page_not_found(error):
    return render_template('page_not_found.html'), 404
