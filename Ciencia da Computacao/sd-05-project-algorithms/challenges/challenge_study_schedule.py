def study_schedule(start_time, end_time, target_time):
    if (not (start_time and end_time and target_time)):
        return 0

    contador = 0

    for i in range(len(start_time)):
        if (target_time >= start_time[i] and target_time <= end_time[i]):
            contador += 1
    return contador
