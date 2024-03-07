import { NavigationContainer } from "@react-navigation/native";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
// 
import { useAuthContext } from "../hooks/useAuthContext";
import DashboardNavigation from "./DashboardNavigator";
import RootNavigation from "./RootNavigator";

const MainNavigator = () => {
  const { user, setUser } = useAuthContext();
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(
      auth,
      async (authenticatedUser) => {
        authenticatedUser ? setUser(authenticatedUser) : setUser(null);
        setIsLoading(false);
      }
    );
    return unsubscribeAuth; // Unsubscribe auth listener on unmount
  }, [user]);

  if (isLoading) {
    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <ActivityIndicator size="large" color="#4683FB"/>
      </SafeAreaView>
    );
  }

  return (
    <NavigationContainer>
      {user ? <DashboardNavigation /> : <RootNavigation />}
    </NavigationContainer>
  );
};

export default MainNavigator;
