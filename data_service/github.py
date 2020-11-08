import requests
import json
import urllib
import datetime
import random
import traceback
import re
from bs4 import BeautifulSoup
from collections import Counter
from lxml.html import fromstring


def get_github_data(username):
    repo=[]
    star={}
    popular_repo={}
    language=[]
    contributed_repo=[]
    popular_contributed_repo={}
    url_for_api='https://api.github.com/users/'+username+'?access_token=7d5bfe7c15f4f7a27341f8372b28ff84ec5e089f'
    date_repo={}
    ## --- Get User data from username ---- ##
    data=requests.get(url_for_api )
    data=data.text
    data=json.loads(data)

    # print(data)
    ## --- Get repository data from repo_url ---- ##
    repo_url=data['repos_url']
    repo_data=requests.get(repo_url+'?access_token=7d5bfe7c15f4f7a27341f8372b28ff84ec5e089f')
    repo_data=repo_data.text
    repo_data=json.loads(repo_data)
    # print(repo_data[0]['url'])

    ## --- Get name of repository --- ##
    for i in range(0,len(repo_data)):
        flag=0
        
        ## --- Get repository url --- ##
        url=repo_data[i]['url']
        date=repo_data[i]['created_at']
        date=date.split('T')
        date=date[0]
        date_repo.__setitem__(date,url)

        url_data=requests.get(url+'?access_token=7d5bfe7c15f4f7a27341f8372b28ff84ec5e089f')
        url_data=url_data.text
        url_data=json.loads(url_data)
        
        ## ---- Get Star of particular repository ---- ##
        star_url=repo_data[i]['stargazers_url']+'?access_token=7d5bfe7c15f4f7a27341f8372b28ff84ec5e089f'
        star_data=requests.get(star_url)
        star_data=star_data.text
        star_data=json.loads(star_data)
        language.append(repo_data[i]['language'])
        repo.append(repo_data[i]['name'])
        if(len(star_data)>5 and flag==1):
            popular_repo.__setitem__(repo_data[i]['name'],len(star_data))
        try:
            contributed_repo.append(repo_data[i]['name'])
            star.__setitem__(url_data['parent']['forks'],url_data['parent']['html_url'])
        except:
            flag=1
            


    date_repo=dict(sorted(date_repo.items(),key = lambda x: x[0],reverse=True) )
    if(len(popular_repo)==0):
        repos=list(date_repo.values())
        if(len(repos)>4):
            repos=repos[0:3]
    sorted_fork={}

    sorted_fork = sorted(star.items(), key=lambda kv: kv[0])
    sorted_fork=dict(sorted_fork)
    list_fork=list(sorted_fork.values())

    list_no_fork=list(sorted_fork.keys())
    list_fork=list_fork[0:3]
            

    ##  --- Get top 3 language --- ## 
    language = [i for i in language if i] 
    lang=Counter(language)
    lang=dict(lang)

    sorted_x = sorted(lang.items(), key=lambda kv: kv[1],reverse=True)
    sorted_lang=dict(sorted_x)
    list_lang=list(sorted_lang.keys())
    list_lang=list_lang[0:3]

    ## --- Scrap Contribution of user ---- ##
    url='https://github.com/'+username
    cont_data=requests.get(url)
    cont_data=cont_data.text
    soup = BeautifulSoup(cont_data, 'html.parser')
    cont_data = soup.findAll("h2", {"class": "f4 text-normal mb-2"})
    cont_data=cont_data[0].text.strip()
    temp = re.findall(r'\d+', cont_data) 

    data_dict={'name':data['name'],'bio':data['bio'],'avatar':data['avatar_url'],'repo_count':len(repo),'company':data['company'],'contribution':temp[0],'language':list_lang,'total_contributed_repo':len(contributed_repo),'popular_contribution':list_fork,'twitter':data['twitter_username']}
    if(len(popular_repo)==0):
        data_dict['popular_repo'] = repos
    else:
        data_dict['popular_repo'] = popular_repo

    return data_dict
    