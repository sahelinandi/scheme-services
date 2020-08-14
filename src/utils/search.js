import get from "lodash/get";
import findIndex from "lodash/findIndex";
import isEmpty from "lodash/isEmpty";
import { httpRequest } from "./api";
import envVariables from "../envVariables";
import userService from "../services/userService";
import omitBy from "lodash/omitBy";
import isNil from "lodash/isNil";
import { convertDateToEpoch} from "../utils";
import {encrypt,decrypt} from "../utils/encryption";

let requestInfo = {};

export const intConversion = string => {
  return string ? parseInt(string) : null;
};

export const floatConversion = string => {
  return string ? parseFloat(string) : null;
};

export const booleanConversion = string => {
  return string ? ((string==="true")?true:false): null;
};

export const mergeUserResults = async (response, query = {}, reqInfo) => {
  requestInfo = reqInfo;
  let result = [];
  for (var i = 0; i < response.length; i++) {
    let user = {};        
    user = await userRowMapper(response[i]);
    result.push(user);
  }  
  return result;
};

const userRowMapper = async (row, mapper = {}) => {
  let user = isEmpty(mapper) ? {} : mapper;
  user.userName =row.user_name;
  user.password = row.password; 
  return user;
};

