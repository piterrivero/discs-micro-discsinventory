package com.discs.inventory.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.discs.inventory.proxies.DiscsServiceProxy;

@RestController
public class DiscsController {

	private Logger logger = LoggerFactory.getLogger(this.getClass());

	  @Autowired
	  private DiscsServiceProxy discsProxy;
	  
	  @RequestMapping(value="/discs")
	  public ModelAndView discs() {
		  ModelAndView modelAndView = new ModelAndView();
		  modelAndView.setViewName("discs");
	      return modelAndView;
	  }
	
	  @GetMapping("/discs-service-list")
	  public String discsServiceList() {
	
	    String response = discsProxy.list("ASC");
	
	    logger.info("{}", response);
	
	    return response;
	  }
}
