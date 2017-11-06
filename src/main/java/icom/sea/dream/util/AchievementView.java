package icom.sea.dream.util;

import java.io.Serializable;


/**
 * 成就
 * @author guangyu
 */
@SuppressWarnings("serial")
public class AchievementView implements Serializable{
	public AchievementView(String key, String name, int needHeartNum,String shareIcon, String shareTitle,String shareContent) {
		this.key = key;
		this.name = name;
		this.needHeartNum = needHeartNum;
		this.shareIcon = shareIcon;
		this.shareTitle = shareTitle;
		this.shareContent = shareContent;
	}

	//成就的key
	private String key;
	//成就名称
	private String name;
	//成就需要的心数
	private int needHeartNum;
	//分享用图标
	private String shareIcon;
	//分享的标题
	private String shareTitle;
	//分享的内容
	private String shareContent;
	
	public void setKey(String key) {
		this.key = key;
	}
	public void setName(String name) {
		this.name = name;
	}
	public void setNeedHeartNum(int needHeartNum) {
		this.needHeartNum = needHeartNum;
	}
	public String getKey() {
		return key;
	}
	public String getName() {
		return name;
	}
	public int getNeedHeartNum() {
		return needHeartNum;
	}
	public String getShareIcon() {
		return shareIcon;
	}
	public void setShareIcon(String shareIcon) {
		this.shareIcon = shareIcon;
	}
	public String getShareTitle() {
		return shareTitle;
	}
	public void setShareTitle(String shareTitle) {
		this.shareTitle = shareTitle;
	}
	public String getShareContent() {
		return shareContent;
	}
	public void setShareContent(String shareContent) {
		this.shareContent = shareContent;
	}
	
}
