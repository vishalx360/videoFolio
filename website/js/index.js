const base_url = "http://127.0.0.1:5000/dataservice"


function showData(data){
    console.log("got final data")
    console.log(data)
    $("#resultwait").hide()
    
    final = {}
    final["github_username"] = $("#github_handle").val()
    final["linkedin_profile"] = "https://linkedin.com/in/" + $("#linkedin_handle").val()
    final["education"] = data["linkedin"]["education"]
    final["work_exp"] = data["linkedin"]["work_exp"]
    final["name"] = data["linkedin"]["first_name"] + " " + data["linkedin"]["last_name"]
    final["headline"] = data["linkedin"]["headline"]
    final["profile_url"] = data["github"]["avatar"]  
    final["repo_count"] = data["github"]["repo_count"]
    final["languages"] = data["github"]["language"]
    final["total_Contributed_repos"] = data["github"]["total_contributed_repo"]
    final["popular_repo"] = data["github"]["popular_repo"]
    final["popular_contributions"] = data["github"]["popular_contribution"]
    final["total_contributions"] = data["github"]["contribution"]
    console.log(final)

    document.getElementById("finalresult").innerText = JSON.stringify(final, undefined, 4)
}

$(document).ready(function(){
    $("#resultwait").hide()
    console.log("Loaded")
    data_count = 0
    finaldata = {}

    $("#dataInputForm").on('submit',function(e){
        $("#resultwait").show()
        e.preventDefault()
        const github_handle = $("#github_handle").val()
        const linkedin_handle = $("#linkedin_handle").val()

        let linkedin_dataurl = `${base_url}/linkedin/${linkedin_handle}`
        let github_dataurl = `${base_url}/github/${github_handle}`

        console.log(linkedin_dataurl)
        console.log(github_dataurl)

        $.ajax({
            url: linkedin_dataurl, 
            timeout	: 40*1000,
            success: function(result){
                console.log("got linkedin data")
                console.log(result)
                data_count += 1
                finaldata["linkedin"] = result
                if(data_count == 2){
                    showData(finaldata)
                    data_count = 0
                }
            }
        });

        $.ajax({
            url: github_dataurl, 
            timeout	: 40*1000,
            success: function(result){
                console.log("got github data")
                console.log(result)
                data_count += 1
                finaldata["github"] = result
                if(data_count == 2){
                    showData(finaldata)
                    data_count = 0
                }
            }
        });

        return false
    });
})

