$(document).ready(function() {
    // Card click handler
    $('.card').on('click', function() {
        const link = $(this).data('link');
        if (link) {
            window.location.href = link;
        }
    });

    const updates = {
        "2024-04-01": "April 1, 2024 - Updated the Freeware listing page.",
        "2024-03-15": "March 15, 2024 - Now HTTPS! Updated links to match HTTPS URLs.",
        "2024-03-01": "March 1, 2024 - Added notes about service updates.",
        "2024-02-14": "February 14, 2024 - Infrastructure maintenance (no visible changes).",
        "2024-01-07": "January 7, 2024 - Corrected a typo on the front page.",
        "2024-01-01": "January 1, 2024 - Refreshed Freeware listing for new year.",
        "2023-12-11": "December 11, 2023 - Minor content adjustments.",
        "2023-11-15": "November 15, 2023 - Upgraded backend server software.",
        "2023-10-01": "October 1, 2023 - Toys section updated with new examples.",
        "2023-09-15": "September 15, 2023 - Fixed broken links in site navigation.",
        "2023-08-01": "August 1, 2023 - Added new online utilities to JavaScript Tools.",
        "2023-07-04": "July 4, 2023 - Independence Day update, minor design tweaks.",
        "2023-06-01": "June 1, 2023 - Revised Freeware descriptions.",
        "2023-05-01": "May 1, 2023 - Tutorials section expanded with new topics.",
        "2023-04-01": "April 1, 2023 - Spring maintenance update.",
        "2023-03-15": "March 15, 2023 - Security updates to backend systems.",
        "2023-03-01": "March 1, 2023 - Minor layout improvements.",
        "2023-02-14": "February 14, 2023 - Valentine's Day: site color refresh.",
        "2023-02-01": "February 1, 2023 - Image optimization across pages.",
        "2023-01-01": "January 1, 2023 - New Year's Day refresh of homepage wording."
    };
    

    // Dynamically populate the dropdown, newest first
    const sortedDates = Object.keys(updates).sort((a, b) => b.localeCompare(a));
    $.each(sortedDates, function(index, date) {
        $('#update-select').append(`<option value="${date}">${formatDate(date)}</option>`);
    });

    // When date changes
    $('#update-select').on('change', function() {
        const selectedDate = $(this).val();
        const updateText = updates[selectedDate] || "";
        $('#update-content').hide().html(updateText).fadeIn(300);
    });

    // Helper function to format YYYY-MM-DD → readable
    function formatDate(dateStr) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-US', options);
    }
});
