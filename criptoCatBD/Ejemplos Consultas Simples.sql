/****** Script for SelectTopNRows command from SSMS  ******/
/* 
 Comentario de bloque
*/

--Comentario de linea

/* 
--Select autogenerado por Managment Studio
SELECT TOP (1000) [country_id]
       [country_id]
      ,[country_name]
      ,[region_id]
FROM [Cata2022].[dbo].[countries]
*/

/*
--Select Simple
Select * 
--From Database.schema.table ([Cata2022].[dbo].[countries])
From [departments]
*/

/*
--Select Simple Performante
Select department_name, department_id, location_id
--From Database.schema.table ([Cata2022].[dbo].[countries])
From [departments]
*/


/*
--Select Simple Performante con where
Select department_id, location_id, department_name
From [departments]
Where  department_name = 'Human Resources' -- Cadena de caracteres se usa comilla simple
       AND location_id = 2400

Select department_id, location_id, department_name
From [departments]
Where  department_name = 'Human Resources' 
       OR location_id = 1500
*/

/*
--Select con Order By
Select location_id, department_name, department_id
From [departments]
Order By location_id desc, department_name asc, department_id --asc/desc
*/

/*
--Select con Group By
Select 
     Sum (department_id) AS SumaDeId ,
	 --Sum (department_id) SumaDeId ,
	 --department_name, 
	 Max(department_id) MaximoId,
	  Avg(cast(department_id as decimal)) PromedioId,
	 location_id
From [departments]
--Where location_id = 2700 or location_id = 1700 
Where location_id in (1700,2700)
Group By location_id
Having Max(department_id) = 11
*/

/*
--Select con Between
Select location_id, department_name, department_id
From [departments]
--Where location_id not in (1700,2700)
Where location_id not between 1700 and 2700
order by location_id
*/

/*
--Select Ejemplo NULL
Select location_id, department_name, department_id
From [departments]
where location_id is null
*/



