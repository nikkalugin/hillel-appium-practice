export async function activateApp(appPackage) {
    try {
        await activateApp(appPackage);
    } catch (error) {
        console.error(`Failed to activate app: ${error}`);
        throw error;
    }
}

export async function terminateApp(appPackage) {
    try {
        await terminateApp(appPackage);
    } catch (error) {
        console.error(`Failed to terminate app: ${error}`);
        throw error;
    }
}

export async function pauseApp(time) {
    try {
        await driver.pause(time);
    } catch (error) {
        console.error(`Failed to terminate app: ${error}`);
        throw error;
    }
}