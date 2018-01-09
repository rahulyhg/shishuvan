server {
	listen 443 ssl;
	server_name shishuviharindia.com;
	ssl_certificate /etc/letsencrypt/live/shishuviharindia.com/fullchain.pem;
	ssl_certificate_key /etc/letsencrypt/live/shishuviharindia.com/privkey.pem;
	location /api {
		proxy_pass http://127.0.0.1:84;
		proxy_set_header Host $host;
		proxy_set_header X-Real-IP $remote_addr;
		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
		proxy_set_header X-Forwarded-Proto $scheme;
	}
	location / {
		proxy_pass http://127.0.0.1:84;
		proxy_set_header Host $host;
		proxy_set_header X-Real-IP $remote_addr;
		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
		proxy_set_header X-Forwarded-Proto $scheme;
	}
	location /backend {
		root /home/info/shishuvan;
		index index.html index.htm;
	}
}
server {
	listen 84;
	server_name shishuviharindia.com;
	return 301 https://shishuviharindia.com$request_uri;
}