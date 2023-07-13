function dynamicLayout() {
    var browserWidth = getBrowserWidth();

    // Narrow CSS rules
    if (browserWidth < 640) {
        changeLayout("narrow");
    }
    // Normal (default) CSS rules
    if ((browserWidth >= 640) && (browserWidth <= 960)) {
        changeLayout("default");
    }
    // Wide CSS rules
    if (browserWidth > 960) {
        changeLayout("wide");
    }
}