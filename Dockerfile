FROM registry.cn-shenzhen.aliyuncs.com/runcobo/node:14-slim as builder
# 在主项目构建阶段也安装 Git
WORKDIR /usr/src/app
RUN npm cache clean -force
RUN npm config set registry https://registry.npmmirror.com
COPY package*.json ./

RUN npm i
COPY . /usr/src/app

# 4. 运行统计脚本（确保在项目目录）
RUN --mount=type=bind,from=registry.cn-hangzhou.aliyuncs.com/hewenfei/ai-analy-stats:latest,source=/app,target=/app-stats \
    sh -c 'cd /usr/src/app && /app-stats/entrypoint.sh'
    
RUN npm run build

FROM registry.cn-shenzhen.aliyuncs.com/runcobo/nginx:stable-alpine
COPY default.conf /etc/nginx/conf.d/
COPY --from=builder /usr/src/app/dist/ /usr/share/nginx/html/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]