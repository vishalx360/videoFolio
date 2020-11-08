from secrets import *
from linkedin_api import Linkedin

month_name = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

api = Linkedin(LINKEDIN_EMAIL, LINKEDIN_PASSWORD)
print("LinkedIn Setted Up")

def get_profile(handle):
    try:
        profile = api.get_profile(handle)
        return profile
    except Exception as e:
        print(e)
        return None

def process_profile(profile):
    li_data = {}
    li_data["headline"] = profile.get("headline")
    li_data["location"] = profile.get("locationName")
    li_data["summary"] = profile.get("summary", None) 
    li_data["first_name"] = profile.get("firstName",None)
    li_data["last_name"] = profile.get("lastName",None)
    li_data["education"] = []
    for edu in profile.get("education",[]):
        educ = {}
        educ["institute"] = edu.get("schoolName",)
        educ["course"] = edu.get("degreeName")
        if edu.get("fieldOfStudy") is not None:
            educ["course"] += " - " + edu.get("fieldOfStudy")
        educ["start_date"] = edu.get("timePeriod",{}).get("startDate",{}).get("year",0)
        educ["end_date"] = edu.get("timePeriod",{}).get("endDate",{}).get("year",0)
        educ["description"] = edu.get("description")
        li_data["education"].append(educ)
    
    li_data["work_exp"] = []
    for workexp in profile.get("experience",[]):
        work = {}
        work["company"] = workexp.get("companyName")
        work["title"] = workexp.get("title")
        work["location"] = workexp.get("geoLocationName")
        work["start_date"] = workexp.get("timePeriod",{}).get("startDate",{}).get("year",0)
        start_month = workexp.get("timePeriod",{}).get("startDate",{}).get("month",0)
        if start_month != 0:
            work["start_date"] = f'{month_name[start_month-1]}, {work["start_date"]}'
        work["end_date"] = workexp.get("timePeriod",{}).get("endDate",{}).get("year",0)
        end_month = workexp.get("timePeriod",{}).get("endDate",{}).get("month",0)
        if end_month != 0:
            work["end_date"] = f'{month_name[end_month-1]}, {work["end_date"]}'
        li_data["work_exp"].append(work)
    return li_data