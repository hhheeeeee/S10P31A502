package com.ssafy.mugit.infrastructure.redis;

import lombok.extern.slf4j.Slf4j;

import java.util.concurrent.atomic.AtomicInteger;

@Slf4j
public class Receiver {
    private AtomicInteger counter = new AtomicInteger();

    public void receiveMessage(String message) {
        log.info("Received message : {}", message);
        counter.incrementAndGet();
    }

    public int getCount() {
        return counter.get();
    }
}
