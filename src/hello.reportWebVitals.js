const reportWebVitals = onperfentry => {

    if (onPerfEntry && onPerfEntry instanceof Function) {
        import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB}) =>{
            getCLS(onperfentry);
            getFID(onperfentry);
            getFCP(onperfentry);
            getLCP(onperfentry);
            getTTFB(onperfentry);
        });
    }
};

export default reportWebVitals;