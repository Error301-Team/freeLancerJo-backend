"use strict";
class Employees {
    constructor(id, name, category, active_project_count, seo_url, seo_info, local) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.active_project_count = active_project_count;
        this.seo_url = seo_url;
        this.seo_info = seo_info;
        this.local = local;       
    }
}
module.exports = Employees;