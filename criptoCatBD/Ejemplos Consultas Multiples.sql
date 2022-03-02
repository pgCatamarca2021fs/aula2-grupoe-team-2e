Select --r.region_name,
       --c.country_name
	   *
From regions as r, --(4)
     countries c --(25)
where r.region_id = c.region_id
	 --25*4
order by country_name

Select --r.region_name,
       --c.country_name
	   *
From regions as r
Inner Join countries c ON r.region_id = c.region_id
order by country_name

Select *
From regions as r, --(4)
     countries c, --(25)
	 locations loc --(7)