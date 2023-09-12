package com.jobquestlog.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.io.Serial;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException{

    @Serial
    private static final long serialVersionUID = 1L;

    /**
     * Throws an exception with status 404 Not Found when trying to fetch a resource that does not exist.
     * @param message The message to explain the error.
     */
    public ResourceNotFoundException(String message) {
        super(message);
    }
}
