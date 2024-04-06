from django.http import JsonResponse
from executive.api import api_routes
from django.contrib.auth.decorators import login_required

@login_required(login_url='login')
def faculty_info(request):  
    fis_faculty_info = api_routes.get_fis_faculty_data(request)
    faculty_list = []
    
    for faculty_id, faculty_details in fis_faculty_info["Faculties"].items():
        faculty_name = f"{faculty_details['LastName']}, {faculty_details['FirstName']} {faculty_details['MiddleInitial']}."
        faculty_type = f"{faculty_details['FacultyType']}"
        faculty_rank = f"{faculty_details['Rank']}"
        faculty_addr = f"{faculty_details['ResidentialAddress']}"
        faculty_mail = f"{faculty_details['Email']}"
        faculty_numb = f"{faculty_details['MobileNumber']}"

        faculty_list.append({
            'Faculty_name': faculty_name,
            'Faculty_type': faculty_type,
            'Faculty_rank': faculty_rank,
            'Faculty_addr': faculty_addr,
            'Faculty_mail': faculty_mail,
            'Faculty_numb': faculty_numb
        })
        
    if request.headers.get('x-requested-with') == 'XMLHttpRequest':
        return JsonResponse(faculty_list, safe=False)
    else:
        return (faculty_list) 