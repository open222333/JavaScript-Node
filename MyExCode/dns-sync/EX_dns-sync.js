function getAllRecords(domain) {
  let dnsSync = require('dns-sync');
  let result_records = {};
  let loop_index = 1;
  let resolved_domain = domain;
  let cname_records = dnsSync.resolve(resolved_domain, 'CNAME');
  while (cname_records !== null) {
    result_records[loop_index] = cname_records;
    resolved_domain = cname_records[0];
    loop_index++
    cname_records = dnsSync.resolve(resolved_domain, 'CNAME');
  }
  address = dnsSync.resolve(resolved_domain, 'A');
  result_records[loop_index] = address;

  return result_records;
}

getAllRecords()