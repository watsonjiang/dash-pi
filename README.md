# dash-pi

dashboard for raspberry pi

# architecture

- reactjs + mui
- flask

# dashapp 

- 构建

```
dashapp> yarn build
```

- 启动
```
DANGEROUSLY_DISABLE_HOST_CHECK=true yarn start
```

# dashsvr

- 构建
```
dashsvr> cp -r ../dashapp/build/* dashpi/static
dashsvr> python -m build --wheel
```

- 启动

```
flask --app dashpi run
```
