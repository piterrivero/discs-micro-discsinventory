package com.discs.inventory.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class GroupsController {

	private Logger logger = LoggerFactory.getLogger(this.getClass());

	  @RequestMapping(value="/groups")
	  public ModelAndView groups() {
		  ModelAndView modelAndView = new ModelAndView();
		  modelAndView.setViewName("groups");
	      return modelAndView;
	  }
	  
	  @RequestMapping(value="/onAddGroup")
	  public ModelAndView onAddGroup() {
		  ModelAndView modelAndView = new ModelAndView();
		  modelAndView.setViewName("addGroup");
	      return modelAndView;
	  }
	  
	  @RequestMapping(value="/onEditGroup")
	  public ModelAndView onEditGroup() {
		  ModelAndView modelAndView = new ModelAndView();
		  modelAndView.setViewName("editGroup");
	      return modelAndView;
	  }
	
	
}
