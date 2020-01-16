
$(document).ready(function () {
    // category dropdown setting
    let categoryDropdown = document.getElementById("category");
    let CategoryList = [
        { name: "One", value: "1" },
        { name: "Two", value: "2" },
        { name: "Three", value: "3" },
        { name: "Four", value: "4" },
        { name: "Five", value: "5" },
    ]

    $.each(CategoryList, function (key, entry) {
        let optionName = CategoryList[key].name;
        let optionValue = CategoryList[key].value;
        let el = document.createElement("option");
        el.textContent = optionName;
        el.value = optionValue;
        categoryDropdown.appendChild(el);
    });
    $('#category').selectize();

    // country list setting
    let countryDropdown = document.getElementById("selectCountry");
    let CountryList = [
        { name: 'Afghanistan', code: 'AF' },
        { name: 'Åland Islands', code: 'AX' },
        { name: 'Albania', code: 'AL' },
        { name: 'Algeria', code: 'DZ' },
        { name: 'American Samoa', code: 'AS' },
        { name: 'India', code: 'IND' }
    ]

    $.each(CountryList, function (key, entry) {
        let optionName = CountryList[key].name;
        let optionValue = CountryList[key].code;
        let el = document.createElement("option");
        el.textContent = optionName;
        el.value = optionValue;
        countryDropdown.appendChild(el);
    });
    $('#selectCountry').selectize();

    // city list setting
    let cityDropdown = document.getElementById("selectCity");
    let CityList = [
        { "country": "AD", "name": "Sant Julià de Lòria" },
        { "country": "AD", "name": "Pas de la Casa" },
        { "country": "AD", "name": "Ordino" },
        { "country": "AD", "name": "les Escaldes" },
        { "country": "AD", "name": "la Massana" },
    ]

    $.each(CityList, function (key, entry) {
        let optionName = CityList[key].name;
        let optionValue = CityList[key].name;
        let el = document.createElement("option");
        el.textContent = optionName;
        el.value = optionValue;
        cityDropdown.appendChild(el);
    });
    $('#selectCity').selectize();
});

$('#startDatepicker').datepicker({
    uiLibrary: 'bootstrap4'
});
$('#endDatepicker').datepicker({
    uiLibrary: 'bootstrap4'
});

var projectDetails = {};
function proceed(i) {
    console.log("startProject" + i);
    document.getElementById("startProject" + i).style.display = "none";
    document.getElementById("startProject" + (i + 1)).style.display = "block";
    var progress = i * 20;
    document.getElementById("progressbar").style.width = progress + "%";


    var category = $("#category").change(function () {
        var category = $('option:selected', this).text();
    });

    Dropzone.options.formUpload = {
        init: function () {
            this.on("success", function (data) {
                var response = $.parseJSON(data.xhr.response);
            });
        }
    }

    switch (i) {
        case 1:
            projectDetails.type = "Social Change";
            break;
        case 2:
            projectDetails.category = category[0].value;
            break;
        case 3:
            let secondformValues = {};
            $.each($('#thirdRegForm').serializeArray(), function (i, field) {
                secondformValues[field.name] = field.value;
            });

            projectDetails.Title = secondformValues.title;
            projectDetails.Url = secondformValues.projectUrl;
            projectDetails.Comment = secondformValues.comment;
            break;
        case 4:
            let thirdformValues = {};
            $.each($('#fourthRegForm').serializeArray(), function (i, field) {
                thirdformValues[field.name] = field.value;
            });
            projectDetails.selectedCountry = thirdformValues.selectCountry;
            projectDetails.selectedCity = thirdformValues.selectCity;
            projectDetails.startDate = thirdformValues.startDate;
            projectDetails.endDate = thirdformValues.endDate;
            projectDetails.targetSupport = thirdformValues.targetSupport;
            break;
        default:
            break;
    }
}