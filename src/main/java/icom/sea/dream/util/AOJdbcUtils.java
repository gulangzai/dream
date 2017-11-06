package icom.sea.dream.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Properties;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.jdbc.support.JdbcUtils;

public class AOJdbcUtils {
	private static Logger logger = LoggerFactory.getLogger(AOJdbcUtils.class);
	private static String driverClass;
	private static String url;
	private static String user;
	private static String password;
	static {
		try {
			Properties prop = new Properties();
			prop.load(JdbcUtils.class.getClassLoader().getResourceAsStream("config.properties"));
			driverClass = prop.getProperty("jdbc.driverClassName");
			url = prop.getProperty("jdbc.url");
			user = prop.getProperty("jdbc.username");
			password = prop.getProperty("jdbc.password");
			Class.forName(driverClass);
		} catch (Exception e) {
			throw new ExceptionInInitializerError(e);
		}
	}
	
	public static Connection getConnection() throws SQLException{
		return DriverManager.getConnection(url, user, password);
	}
	
	public static void release(ResultSet rs,Statement stat,Connection conn){
		if(rs!=null){
			try {
				rs.close();
			} catch (SQLException e) {
				logger.error("release",e);
			}
			rs=null;
		}
		if(stat!=null){
			try {
				stat.close();
			} catch (SQLException e) {
				logger.error("release",e);
			}
			stat=null;
		}
		if(conn!=null){
			try {
				conn.close();
			} catch (SQLException e) {
				logger.error("release",e);
			}
			conn=null;
		}
	}
}
