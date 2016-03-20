/*
* @Author: alexpelletier
* @Date:   2016-01-10 22:39:22
* @Last Modified by:   alexpelletier
* @Last Modified time: 2016-02-01 21:20:34
*/
import React from 'react';
require("./ContactUs.css");
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var ContactUs = React.createClass({
    mixins: [LinkedStateMixin],
    getInitialState: function() {
        return {
            name: "",
            email: "",
            phone: "",
            message: "",
            isSending: false
        };
    },
    render: function() {
        return (
            <div className="row">
                <div className="col-lg-8 col-lg-offset-2">
                    <form id="contactForm" name="sentMessage" novalidate="">
                        <div className="row control-group">
                            <div className="form-group col-xs-12 floating-label-form-group controls">
                                <label>
                                    Name
                                </label>
                                <input valueLink={this.linkState('name')} id="name" type="text" placeholder="Name" required="" data-validation-required-message="Please enter your name." className="form-control" aria-invalid="false"/>
                                <p className="help-block text-danger">
                                </p>
                            </div>
                        </div>
                        <div className="row control-group">
                            <div className="form-group col-xs-12 floating-label-form-group controls">
                                <label>
                                    Email Address
                                </label>
                                <input valueLink={this.linkState('email')} id="email" type="email" placeholder="Email Address" required="" data-validation-required-message="Please enter your email address." className="form-control" aria-invalid="false"/>
                                <p className="help-block text-danger">
                                </p>
                            </div>
                        </div>
                        <div className="row control-group">
                            <div className="form-group col-xs-12 floating-label-form-group controls">
                                <label>
                                    Phone Number
                                </label>
                                <input valueLink={this.linkState('phone')} id="phone" type="tel" placeholder="Phone Number" required="" data-validation-required-message="Please enter your phone number." className="form-control" aria-invalid="false"/>
                                <p className="help-block text-danger">
                                </p>
                            </div>
                        </div>
                        <div className="row control-group">
                            <div className="form-group col-xs-12 floating-label-form-group controls">
                                <label>
                                    Message
                                </label>
                                <textarea valueLink={this.linkState('message')} id="message" rows="5" placeholder="Message" required="" data-validation-required-message="Please enter a message." className="form-control" aria-invalid="false">
                                </textarea>
                                <p className="help-block text-danger">
                                </p>
                            </div>
                        </div>
                        <br/>
                        <div id="success">
                        </div>
                        <div className="row">
                            <div className="form-group col-xs-12">
                                <button type="submit" className="btn btn-success btn-lg">
                                    Send
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
});
module.exports = ContactUs;
