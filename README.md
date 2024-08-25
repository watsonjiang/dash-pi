# dash-pi

dashboard for raspberry pi

# architecture

- reactjs + antd
- flask

# build

- dashapp

```
dashapp> yarn build
```

- dashsvr

```
dashsvr> cp -r ../dashapp/build/* dashpi/static
dashsvr> python -m build --wheel
```

# install

```
pip install dashpi-1.0.0-py2.py3-none-any.whl
```
