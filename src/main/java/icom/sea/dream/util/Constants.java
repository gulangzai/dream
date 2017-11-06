package icom.sea.dream.util;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

public class Constants {

	public static final int CODE_SUCCESS = 1000;
	public static final int CODE_FAILED_EXISTS = 1001;
	public static final int CODE_TOKEN_UNAUTHORIZED = 1002;
	public static final int CODE_FAILED_UNKNOWN = 1999;
	public static final int CODE_FAILED_UNEXISTS = 2001;
	public static final int CODE_UNCOMMIT_INFO_USER = 2000;
	public static final int TOKEN_LOGIN_TIMEOUT = 2002;
	public static final int TOKEN_LOGIN_ANOTHER = 2003;
	public static final int TOKEN_LOGIN_NOTOKEN = 2004;
	public static final int CODE_FAILED_SUBMIT = 2006;
	public static final int CODE_DEVICE_UNAUTHORIZED = 2007;
	//特殊的字符型成功值
	public static final String SUCCESS_STRING = "操作成功";
	//图片验证码的session key
	public static final String PIC_CODE_SESSION_KEY = "PIC_CODE_SESSION_KEY";
	
	public static final int HOUR_STATUS_APPOINTMENTED = 4;
	public static final int HOUR_STATUS_APPOINTMENTED_CURRENT_USER = 3;
	public static final int HOUR_STATUS_DEFAULTSTATUS = 0;
	public static final int HOUR_STATUS_AVAILABLESTATUS = 1;
	public static final int HOUR_STATUS_UNAVAILABLESTATUS = 2;


	public static final String COMMENT_ANONYMOUS_NAME = "匿名";
	
	//验证码过期时间(10分钟)
	public static final long VERCODE_EXPIRE_TIME = 1000*60*10;
	//通用
	public static final int PLATFORM_DEFAULT = -1;
	//后台
	public static final int PLATFORM_WEB = 0;
	//用户端
	public static final int PLATFORM_USER = 1;
	//医生端
	public static final int PLATFORM_DOCTOR = 2;
	//咨询端
	public static final int PLATFORM_CONSULTANT = 3;
	
	//social
	public static int SOCIAL_MAX_REVERTS_IN_REPLY = 3;
	
	
	//sql
	public static int SQL_DEFAULT_MAX = 10;
	
	//用于移动端返回的tip值
	public static String TIP_SUCCESS = "success";
	
	//以下四个参数是图片水印的的常量参数
	//缩小率
	public static final double smallRate = 0.4;
	//左间距
	public static final double leftRange = 0.5;
	//上间距
	public static final double topRange = 0.5;
	//水印图片地址(相对于工程的)
	public static final String markUrl = "file/mark.png";




	
	public static final String morningSignStartTime = "05:00:00";
	public static final String morningSignEndTime = "11:00:00";
	public static final String nightSignStartTime = "20:00:00";
	public static final String nightSignEndTime = "23:59:59";
	public static final String morningClockTime = "06:00";
	public static final String nightClockTime = "21:00";
	



	/**
	 * 领取礼物的常量list
	 */
	public static List<Integer> alertGiftList = new ArrayList<Integer>();
	static{
		alertGiftList.add(24); 
		alertGiftList.add(30); 
		alertGiftList.add(72); 
		alertGiftList.add(90); 
	}
	

	
	/**
	 * 整夜佩戴开始计算"心"的开始时间
	 */
	public static final String allNightWearHeartStartDate = "2016-12-31";
	


	
	
}
