package icom.sea.dream.util;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.springframework.web.multipart.MultipartFile;

/**
 * 验证有关的工具类
 * @author guangyu
 */
public class ValidateUtils {
	private static List<String> imgExtensionNameList = new ArrayList<String>();
	private static List<String> getImgExtensionNameList(){
		if(ValidateUtils.isBlank(imgExtensionNameList)){
			imgExtensionNameList.add("jpg");
			imgExtensionNameList.add("gif");
			imgExtensionNameList.add("png");
			imgExtensionNameList.add("jpeg");
			imgExtensionNameList.add("bmp");
		}
		return imgExtensionNameList;
	}
	
	/**
	 * 用于判断集合是否为空
	 * @param c
	 * @return
	 */
	public static boolean isEmpty(Collection<?> c) {
		return (c == null || c.size() == 0) ? true : false;
	}
	
	/**
	 * 用于判断集合是否为空
	 * @param c
	 * @return
	 */
	public static boolean isBlank(Collection<?> c) {
		return (c == null || c.size() == 0) ? true : false;
	}
	
	/**
	 * 用于判断map是否为空
	 * @param c
	 * @return
	 */
	public static boolean isBlank(Map<?, ?> map){
		return (map==null || map.size() == 0) ? true : false;
	}
	
	/**
	 * 用于验证数组是否为空
	 * @param arr
	 * @return
	 */
	public static boolean isBlank(int[] arr) {
		return arr == null || arr.length == 0;
	}
	
	/**
	 * 用于验证一个字符串是否为空
	 * @param str
	 * @return
	 */
	public static boolean isBlank(String str) {
		return str == null || str.length() == 0 || str.trim().length() == 0;
	}
	
	/**
	 * 用于验证一个字符串是否为空或者全空格
	 * @param str
	 * @return
	 */
	public static boolean isEmpty(String str) {
		return str == null || str.trim().length() == 0;
	}
	
	/**
	 * 检查一个字符串是不是邮箱
	 * @param email
	 * @return
	 */
	public static boolean isEmail(String email){
		if(ValidateUtils.isBlank(email)){
			return false;
		}
		Pattern pattern = Pattern.compile("^([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$");
		Matcher matcher = pattern.matcher(email);
		return matcher.matches();
	}
	
	/**
	 * 检查一个字符串是不是手机号
	 * @param email
	 * @return
	 */
	public static boolean isMobile(String mobile){
		if(ValidateUtils.isBlank(mobile)){
			return false;
		}
		Pattern pattern = Pattern.compile("^1[34578]\\d{9}$");
		Matcher matcher = pattern.matcher(mobile);
		return matcher.matches();
	}
	
	/**
	 * 用于判断map中的某个字段是不是空的
	 * @param map
	 * @param key
	 * @return
	 */
	public static boolean isBlank(Map<?, ?> map,String key){
		if(map==null || map.get(key)==null || isBlank(map.get(key).toString())){
			return true;
		}
		return false;
	}

	public static boolean isImgExtensionName(String extName) {
		List<String> imgExtensionNameList = ValidateUtils.getImgExtensionNameList();
		if(ValidateUtils.isBlank(extName)){
			return false;
		}
		extName = extName.toLowerCase();
		if(imgExtensionNameList.contains(extName)){
			return true;
		}else{
			return false;
		}
	}
	
	public static boolean isImgExtensionName(MultipartFile pic) {
		//文件原名
		String originalFilename = pic.getOriginalFilename();
		//文件类型
		String picType = "jpg";
		if(originalFilename.contains(".")){
			picType = originalFilename.substring(originalFilename.lastIndexOf(".")+1,originalFilename.length()).toLowerCase();
		}
		return ValidateUtils.isImgExtensionName(picType);
	}
}
