package com.discs.inventory.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class DiscsInventoryController {

	private Logger logger = LoggerFactory.getLogger(this.getClass());

	@RequestMapping(value="/")
    public ModelAndView home() {
		ModelAndView modelAndView = new ModelAndView();
	    modelAndView.setViewName("home");
        return modelAndView;
    }
	
}
