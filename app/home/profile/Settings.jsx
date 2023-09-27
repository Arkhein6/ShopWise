import { View, Text, Pressable } from "react-native";
import React,{useState} from "react";
import { Switch } from "react-native";
import { settings as styles } from "./styles";

const Settings = () => {
  const [switchCheck,setSwitchCheck] = useState(false)

	return (
		<View style={styles.container}>
			<View style={styles.inner}>
				<Text style={styles.title}>Settings</Text>
				<View style={styles.personalrange}>
					<View style={styles.subtitlerange}>
						<Text style={styles.subtitle}>
							Personal information
						</Text>
						<Pressable>
							<Text style={styles.graytext}>Change</Text>
						</Pressable>
					</View>
					<View style={styles.output}>
						<Text style={[styles.uppertext, styles.graytext]}>
							Full Name
						</Text>
						<Text>Martha Brown</Text>
					</View>
					<View style={styles.output}>
						<Text style={[styles.uppertext, styles.graytext]}>
							Date of Birth
						</Text>
						<Text>12/12/1989</Text>
					</View>
				</View>
				<View style={styles.passwordrange}>
					<View style={styles.subtitlerange}>
						<Text style={styles.subtitle}>Password</Text>
						<Pressable>
							<Text style={styles.graytext}>Change</Text>
						</Pressable>
					</View>
					<View style={styles.output}>
						<Text style={[styles.uppertext, styles.graytext]}>
							Password
						</Text>
						<Text>*********</Text>
					</View>
				</View>
				<View style={styles.notificationsrange}>
					<Text style={styles.subtitle}>Notifications</Text>
					<View style={styles.switchrange}>
						<Text>Sales</Text>
						<Switch onValueChange={(value) => setSwitchCheck((curr) => !curr)} value={switchCheck} thumbColor={"red"}/>
					</View>
					<View style={styles.switchrange}>
						<Text>New Arrivals</Text>
						<Switch onValueChange={(value) => setSwitchCheck((curr) => !curr)} value={switchCheck} thumbColor={"red"}/>
					</View>
					<View style={styles.switchrange}>
						<Text>Delivery status changes</Text>
						<Switch onValueChange={(value) => setSwitchCheck((curr) => !curr)} thumbColor={"red"} trackColor={"red"}  value={switchCheck}/>
					</View>
				</View>
			</View>
		</View>
	);
};

export default Settings;
