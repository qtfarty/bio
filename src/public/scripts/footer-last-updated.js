(function() {
  try {
    // Get label element and update based on language
    var labelEl = document.getElementById('lastUpdatedLabel');
    if (labelEl) {
      var lang = (document.documentElement.getAttribute('lang') || 'en').toLowerCase();
      var labelEn = labelEl.getAttribute('data-label-en') || 'Last updated';
      var labelJa = labelEl.getAttribute('data-label-ja') || '最終更新';
      labelEl.textContent = lang.startsWith('ja') ? labelJa : labelEn;
    }

    // Get date element and format the stored timestamp
    var dateEl = document.getElementById('lastUpdated');
    if (dateEl) {
      var storedDate = dateEl.getAttribute('data-last-updated');
      if (storedDate) {
        var d = new Date(storedDate);
        if (!isNaN(d.getTime())) {
          dateEl.textContent = d.toLocaleDateString(undefined, { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
          });
        }
      }
    }
  } catch(e) {
    // Silently fail if there's an error
  }
})();
