export async function scrollHorizontal() {
    const scroll = $(
        'android=new UiScrollable(new UiSelector().scrollable(true))' +
        '.setAsHorizontalList().scrollForward()'
    );

    await scroll.waitForExist();
}