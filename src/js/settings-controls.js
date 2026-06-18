SETTINGS = {
    starter_type: "Grass",
};

function saveSettings() {
    localStorage.settings = JSON.stringify(SETTINGS);
}

$(document).ready(function() {
    if (!localStorage.settings) {
        saveSettings();
    }
    SETTINGS = {...SETTINGS, ...JSON.parse(localStorage.settings)};
    saveSettings();
    setStarters();

    $(`#${SETTINGS.starter_type.toLowerCase()}:radio[name='starter']`).prop("checked", true).change();
    $(`#${prefersDarkTheme ? "dark" : "light"}:radio[name='theme']`).prop("checked", true).change();

    $("input:radio[name='starter']").change(function () {
    	SETTINGS.starter_type = $(this).val();
    	setStarters();
        saveSettings();
    });
    $("input:radio[name='theme']").change(function () {
        setDarkTheme($(this).val() == "Dark");
    });
        saveSettings();
});