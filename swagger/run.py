from flask import Blueprint
from flask import Flask
from flask import render_template
from werkzeug import serving

import json
import os
import yaml

template_folder = os.path.dirname(__file__)
static_folder = os.path.normpath(
        os.path.join(
        os.path.dirname(__file__), "dist"))
app = Flask(__name__,
        static_folder=static_folder,
        template_folder=template_folder)

def generate_swagger_spec_file():
    swagger_spec = open(os.path.normpath("swagger.yaml")).read()
    try:
        swagger_spec = yaml.load(swagger_spec)
    except:
        pass
    swagger_json = json.dumps(swagger_spec, sort_keys=True, indent=2)
    swagger_json_f = open(os.path.normpath(os.path.join(static_folder, "spec.js")), "w")
    swagger_json_f.write("var spec = {}".format(swagger_json))
    swagger_json_f.close()

@app.route("/swagger", methods=["GET"])
def generate_swagger_docs():
    generate_swagger_spec_file()
    return render_template("swagger-ui.html")

if __name__ == '__main__':
   app.run(debug=True)