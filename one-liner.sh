docker-compose down
# docker volume rm pc-addict-helper_postgres-data
# docker volume rm pc-addict-helper_grafana-storage
docker volume rm pc-addict-helper_influxdb2-config
docker volume rm pc-addict-helper_influxdb2-data
docker-compose up --build --remove-orphans