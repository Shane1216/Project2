USE SUNRAIL;
SELECT sunrail_stop.trip_id, stop_name,  arrival_time, departure_time
FROM sunrail_stop
INNER JOIN stop_times ON stop_times.stop_id=sunrail_stop.stop_id;