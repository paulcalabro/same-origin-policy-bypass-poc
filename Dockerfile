FROM httpd:2.4.53

COPY ./public-html/ /usr/local/apache2/htdocs/
