
    reg = /^(.+?)(\n|$)/;

    var commit_collection = [];
    var author_collection = [];

    chrome.storage.sync.get('blackLists', function(items) {
      var blackListArray = items.blackLists.split(',');
      console.log(blackListArray);
    });

    commits = '<div> - ' + Array.prototype.slice.call(
      document.querySelectorAll('.commit-message a')).map(el => el.title).filter(
        title => title &&
        title.indexOf('Merge') !== 0 &&
        title.includes('tests') === false && 
        title.includes('test') === false && 
        title.includes('lint') === false)
      .map(title => {
        var mm = title.match(reg);
        commit_collection.push(mm && mm[1]);
        return mm && mm[1];
      }).join('<div/> - ');
    authors = '- ' + Array.prototype.slice.call(document.querySelectorAll('.commit-author a')).map(el => el.text).filter(text => text && text.indexOf('Merge') !== 0).map(text => { var mm = text.match(reg); author_collection.push(mm && mm[1]); return mm && mm[1]; }).join('<br/> - ');

    uniqueAuthors = author_collection.filter(function(item, pos) {
      return author_collection.indexOf(item) == pos;
    })

    uniqueAuthors = uniqueAuthors.map(function(e) {return '@' + e});
  
    var commit_info = "<strong>In this release:</strong> " + commits;
    var author_info = "<strong>Contributors:</strong>" + "<br>" + uniqueAuthors.toString();
    var date = "<strong>Date:</strong>" + "<br>" + new Date().toLocaleString();;

    document.querySelector("#pull_request_body").innerHTML = commit_info + "<br><br>" + author_info + "<br><br>" + date;
    document.querySelector(".preview-tab").click();

