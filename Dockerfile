# 将官方 node 用作父镜像
FROM node:latest
# 将工作目录设置为 /usr/src/node
WORKDIR /home/guozishu/project
# 拷贝当前的目录所有文件到工作目录
ADD . /home/guozishu/project/
# 安装依赖包
WORKDIR /home/guozishu/project/shusheng/client/
RUN npm install
RUN npm run build
WORKDIR /home/guozishu/project/shusheng/server/
RUN npm install
WORKDIR /home/guozishu/project/shusheng/
RUN npm install

EXPOSE 3000

RUN npm run prod
# 使端口 8080 可供此容器外的环境使用

# 在容器启动时运行
# CMD ["npm","start"]