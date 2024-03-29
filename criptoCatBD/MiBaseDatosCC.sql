USE [master]
GO
/****** Object:  Database [BDCriptoCat]    Script Date: 30/3/2022 13:18:59 ******/
CREATE DATABASE [BDCriptoCat]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'BDCriptoCat_Data', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\BDCriptoCat.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'BDCriptoCat_Log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\BDCriptoCat.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [BDCriptoCat] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [BDCriptoCat].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [BDCriptoCat] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [BDCriptoCat] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [BDCriptoCat] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [BDCriptoCat] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [BDCriptoCat] SET ARITHABORT OFF 
GO
ALTER DATABASE [BDCriptoCat] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [BDCriptoCat] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [BDCriptoCat] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [BDCriptoCat] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [BDCriptoCat] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [BDCriptoCat] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [BDCriptoCat] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [BDCriptoCat] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [BDCriptoCat] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [BDCriptoCat] SET  DISABLE_BROKER 
GO
ALTER DATABASE [BDCriptoCat] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [BDCriptoCat] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [BDCriptoCat] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [BDCriptoCat] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [BDCriptoCat] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [BDCriptoCat] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [BDCriptoCat] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [BDCriptoCat] SET RECOVERY FULL 
GO
ALTER DATABASE [BDCriptoCat] SET  MULTI_USER 
GO
ALTER DATABASE [BDCriptoCat] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [BDCriptoCat] SET DB_CHAINING OFF 
GO
ALTER DATABASE [BDCriptoCat] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [BDCriptoCat] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [BDCriptoCat] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [BDCriptoCat] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'BDCriptoCat', N'ON'
GO
ALTER DATABASE [BDCriptoCat] SET QUERY_STORE = OFF
GO
USE [BDCriptoCat]
GO
/****** Object:  Table [dbo].[billeteras]    Script Date: 30/3/2022 13:19:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[billeteras](
	[id_billetera] [int] IDENTITY(1,1) NOT NULL,
	[id_cuenta] [int] NULL,
	[id_moneda] [int] NULL,
	[monto_dinero] [money] NULL,
 CONSTRAINT [PK_billeteras] PRIMARY KEY CLUSTERED 
(
	[id_billetera] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[cuenta]    Script Date: 30/3/2022 13:19:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[cuenta](
	[id_cuenta] [int] IDENTITY(1,1) NOT NULL,
	[cvu] [int] NOT NULL,
	[id_usuario] [int] NULL,
 CONSTRAINT [PK_cuenta] PRIMARY KEY CLUSTERED 
(
	[id_cuenta] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[detalle_operacion]    Script Date: 30/3/2022 13:19:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[detalle_operacion](
	[id_detalleoperacion] [int] IDENTITY(1,1) NOT NULL,
	[moneda_usuario_origen] [int] NULL,
	[monto_usuario_origen] [money] NULL,
	[monto_requerido] [float] NULL,
	[cbu_usuario] [int] NULL,
	[id_usuario_destino] [int] NULL,
	[id_operacion] [int] NULL,
	[moneda_requerida] [int] NULL,
	[id_usuario_operacion] [int] NULL,
 CONSTRAINT [PK_detalle_operacion] PRIMARY KEY CLUSTERED 
(
	[id_detalleoperacion] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[historial-cotizacion]    Script Date: 30/3/2022 13:19:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[historial-cotizacion](
	[id_historialcotizacion] [int] IDENTITY(1,1) NOT NULL,
	[fecha] [date] NULL,
	[valor] [money] NULL,
 CONSTRAINT [PK_historial-cotizacion] PRIMARY KEY CLUSTERED 
(
	[id_historialcotizacion] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[moneda]    Script Date: 30/3/2022 13:19:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[moneda](
	[id_moneda] [int] IDENTITY(1,1) NOT NULL,
	[tipo] [varchar](50) NULL,
	[id_historialcotizacion] [int] NULL,
 CONSTRAINT [PK_moneda] PRIMARY KEY CLUSTERED 
(
	[id_moneda] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tipo-operacion]    Script Date: 30/3/2022 13:19:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tipo-operacion](
	[id_operacion] [int] IDENTITY(1,1) NOT NULL,
	[tipo_operacion] [varchar](50) NULL,
 CONSTRAINT [PK_tipo-operacion] PRIMARY KEY CLUSTERED 
(
	[id_operacion] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[usuario]    Script Date: 30/3/2022 13:19:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[usuario](
	[id_usuario] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](50) NULL,
	[apellido] [varchar](50) NULL,
	[email] [varchar](50) NULL,
	[dni] [varchar](50) NULL,
	[fecha_nacimiento] [date] NULL,
	[contraseña] [varchar](50) NULL,
 CONSTRAINT [PK_usuario] PRIMARY KEY CLUSTERED 
(
	[id_usuario] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[usuario-operacion]    Script Date: 30/3/2022 13:19:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[usuario-operacion](
	[id_usuario_operacion] [int] IDENTITY(1,1) NOT NULL,
	[fecha] [date] NULL,
	[estado] [varchar](50) NULL,
	[id_usuario] [int] NULL,
 CONSTRAINT [PK_usuario-operacion] PRIMARY KEY CLUSTERED 
(
	[id_usuario_operacion] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[billeteras]  WITH CHECK ADD  CONSTRAINT [FK_billeteras_cuenta] FOREIGN KEY([id_cuenta])
REFERENCES [dbo].[cuenta] ([id_cuenta])
GO
ALTER TABLE [dbo].[billeteras] CHECK CONSTRAINT [FK_billeteras_cuenta]
GO
ALTER TABLE [dbo].[billeteras]  WITH CHECK ADD  CONSTRAINT [FK_billeteras_moneda] FOREIGN KEY([id_moneda])
REFERENCES [dbo].[moneda] ([id_moneda])
GO
ALTER TABLE [dbo].[billeteras] CHECK CONSTRAINT [FK_billeteras_moneda]
GO
ALTER TABLE [dbo].[cuenta]  WITH CHECK ADD  CONSTRAINT [FK_cuenta_usuario] FOREIGN KEY([id_usuario])
REFERENCES [dbo].[usuario] ([id_usuario])
GO
ALTER TABLE [dbo].[cuenta] CHECK CONSTRAINT [FK_cuenta_usuario]
GO
ALTER TABLE [dbo].[detalle_operacion]  WITH CHECK ADD  CONSTRAINT [FK_detalle_operacion_moneda2] FOREIGN KEY([moneda_usuario_origen])
REFERENCES [dbo].[moneda] ([id_moneda])
GO
ALTER TABLE [dbo].[detalle_operacion] CHECK CONSTRAINT [FK_detalle_operacion_moneda2]
GO
ALTER TABLE [dbo].[detalle_operacion]  WITH CHECK ADD  CONSTRAINT [FK_detalle_operacion_tipo-operacion] FOREIGN KEY([id_operacion])
REFERENCES [dbo].[tipo-operacion] ([id_operacion])
GO
ALTER TABLE [dbo].[detalle_operacion] CHECK CONSTRAINT [FK_detalle_operacion_tipo-operacion]
GO
ALTER TABLE [dbo].[detalle_operacion]  WITH CHECK ADD  CONSTRAINT [FK_detalle_operacion_usuario-operacion] FOREIGN KEY([id_usuario_operacion])
REFERENCES [dbo].[usuario-operacion] ([id_usuario_operacion])
GO
ALTER TABLE [dbo].[detalle_operacion] CHECK CONSTRAINT [FK_detalle_operacion_usuario-operacion]
GO
ALTER TABLE [dbo].[historial-cotizacion]  WITH CHECK ADD  CONSTRAINT [FK_historial-cotizacion_moneda] FOREIGN KEY([id_historialcotizacion])
REFERENCES [dbo].[moneda] ([id_moneda])
GO
ALTER TABLE [dbo].[historial-cotizacion] CHECK CONSTRAINT [FK_historial-cotizacion_moneda]
GO
ALTER TABLE [dbo].[usuario-operacion]  WITH CHECK ADD  CONSTRAINT [FK_usuario-operacion_usuario1] FOREIGN KEY([id_usuario])
REFERENCES [dbo].[usuario] ([id_usuario])
GO
ALTER TABLE [dbo].[usuario-operacion] CHECK CONSTRAINT [FK_usuario-operacion_usuario1]
GO
/****** Object:  StoredProcedure [dbo].[buscarUsuarioPorMailContrasena]    Script Date: 30/3/2022 13:19:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Nick>
-- Create date: <20/03/22>
-- Description:	<Procedure, trear un usuario por email y contraseña>
-- =============================================
CREATE PROCEDURE [dbo].[buscarUsuarioPorMailContrasena] 
	-- Add the parameters for the stored procedure here
	@email varchar(100),
	@contraseña varchar(20)
AS

BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	SELECT * FROM usuario
	WHERE email = @email
	AND contraseña = @contraseña
END
GO
/****** Object:  StoredProcedure [dbo].[crearBilleteraCripto]    Script Date: 30/3/2022 13:19:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[crearBilleteraCripto]
	-- Add the parameters for the stored procedure here
	@idCuenta int,
	@tipoMoneda varchar(50),
	@cantidadCripto float
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	DECLARE  @idMoneda int
	SET @idMoneda = (SELECT id_moneda FROM moneda WHERE tipo = @tipoMoneda)
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	INSERT INTO billeteras(id_cuenta, id_moneda , monto_dinero) VALUES (@idCuenta, @idMoneda , @cantidadCripto)
END
GO
/****** Object:  StoredProcedure [dbo].[crearBilleteraPesos]    Script Date: 30/3/2022 13:19:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[crearBilleteraPesos]
	-- Add the parameters for the stored procedure here
	@cvu int
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	DECLARE  @id_cuenta int
	SET @id_cuenta = (SELECT id_cuenta FROM cuenta WHERE cvu = @cvu)

	SET NOCOUNT ON;

    -- Insert statements for procedure here
	INSERT INTO billeteras(id_cuenta, id_moneda , monto_dinero) VALUES (@id_cuenta, 1 , 10000)
END
GO
/****** Object:  StoredProcedure [dbo].[crearCuenta]    Script Date: 30/3/2022 13:19:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<NICK Y BUBU>
-- Create date: <24/03/22>
-- Description:	<Crear una cuenta basada en el registro del usuario>
-- =============================================
CREATE PROCEDURE [dbo].[crearCuenta]
	-- Add the parameters for the stored procedure here
	@cvu int,
	@dni varchar(50)
	
AS
BEGIN
	DECLARE  @pepe int
	SET @pepe = (SELECT id_usuario FROM usuario WHERE dni = @dni)
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	INSERT INTO cuenta(cvu, id_usuario) VALUES (@cvu, @pepe)
END
GO
/****** Object:  StoredProcedure [dbo].[crearDetalleOperacion]    Script Date: 30/3/2022 13:19:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Nick>
-- Create date: <27/03/22>
-- Description:	<Stored procedure para el almanecamiento de operaciones(compra)>
-- =============================================
CREATE PROCEDURE [dbo].[crearDetalleOperacion]
	-- Add the parameters for the stored procedure here
	@coinSelected varchar(50), 
	@CantidadPesos money,
	@CantidadCripto float,
	@tipoOperacion varchar(50),
	@idUsuario int
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	
	DECLARE  @idCripto int
	SET @idCripto = (SELECT id_moneda FROM moneda WHERE tipo = @coinSelected)

	DECLARE @idOperacion int
	SET @idOperacion = (SELECT id_operacion FROM [tipo-operacion] WHERE tipo_operacion = @tipoOperacion)

	DECLARE @idUsuarioOperacion int
	SET @idUsuarioOperacion = (SELECT id_usuario_operacion FROM [usuario-operacion] WHERE id_usuario = @idUsuario
	AND id_usuario_operacion =(SELECT MAX(id_usuario_operacion) FROM [usuario-operacion] WHERE id_usuario = @idUsuario))

	SET NOCOUNT ON;
	IF(@tipoOperacion = 'COMPRA')
    -- Insert statements for procedure here
	INSERT INTO [dbo].[detalle_operacion]
           ([moneda_usuario_origen]
           ,[monto_usuario_origen]
           ,[monto_requerido]
           ,[id_operacion]
           ,[moneda_requerida]
           ,[id_usuario_operacion])
     VALUES
           (1,
           @CantidadPesos,
           @CantidadCripto,
           @idOperacion,
           @idCripto,
           @idUsuarioOperacion)
	ELSE
	INSERT INTO [dbo].[detalle_operacion]
           ([moneda_usuario_origen]
           ,[monto_usuario_origen]
           ,[monto_requerido]
           ,[id_operacion]
           ,[moneda_requerida]
           ,[id_usuario_operacion])
     VALUES
           (@idCripto,
           @CantidadCripto,
           @CantidadPesos,
           @idOperacion,
           1,
           @idUsuarioOperacion)

END
GO
/****** Object:  StoredProcedure [dbo].[crearOperacion]    Script Date: 30/3/2022 13:19:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Nick>
-- Create date: <26/03/>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[crearOperacion]
	-- Add the parameters for the stored procedure here
	@idUsuario int, 
	@fechaHoy DateTime
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	INSERT INTO [usuario-operacion](estado, fecha ,id_usuario) VALUES ('APROBADO',@fechaHoy, @idUsuario)
END
GO
/****** Object:  StoredProcedure [dbo].[insertarusuario]    Script Date: 30/3/2022 13:19:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[insertarusuario] 
	-- Add the parameters for the stored procedure here
	@nombre nvarchar(20),
	@apellido nvarchar(20),
	@email nvarchar(100),
	@dni nvarchar(8),
	@contraseña nvarchar(20),
	@fechadenacimiento date

AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;
	
	iNSERT INTO usuario
           (
            [nombre]
           ,[apellido]
           ,[email]
           ,[dni]
           ,[contraseña]
		   ,[fecha_nacimiento]

           )
     VALUES
           (
		   @nombre,
           @apellido,
           @email,
		   @dni,
           @contraseña,
		   @fechadenacimiento
           )

END
GO
/****** Object:  StoredProcedure [dbo].[ListarBilleteras]    Script Date: 30/3/2022 13:19:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[ListarBilleteras]
	-- Add the parameters for the stored procedure here
	@idUsuario int
AS
BEGIN
	DECLARE  @idcuenta int
	SET @idcuenta= (SELECT id_cuenta FROM cuenta WHERE id_usuario = @idUsuario)
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	SELECT * FROM billeteras WHERE id_cuenta = @idcuenta
END
GO
/****** Object:  StoredProcedure [dbo].[listarUsuarios]    Script Date: 30/3/2022 13:19:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,Lionel Diez Gómez>
-- Create date: <16/03/22>
-- Description:	<Procedure para listar a todos los usuarios de la base de datos>
-- =============================================
CREATE PROCEDURE [dbo].[listarUsuarios]
	-- Add the parameters for the stored procedure here
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	SELECT *
	FROM usuario
END
GO
/****** Object:  StoredProcedure [dbo].[VenderLaCripto]    Script Date: 30/3/2022 13:19:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Bubu>
-- Create date: <Update  o delete,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[VenderLaCripto] 
	@id_billetera int,
	@id_cuenta int,
	@id_tipo int,
	@monto_dinero money,
	@cantidad_cripto float

AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

			UPDATE billeteras SET monto_dinero = monto_dinero - @cantidad_cripto WHERE id_billetera = @id_billetera AND id_cuenta = @id_Cuenta
			UPDATE billeteras SET monto_dinero = monto_dinero + @monto_dinero WHERE id_moneda = 1 AND id_cuenta = @id_Cuenta
END
GO
USE [master]
GO
ALTER DATABASE [BDCriptoCat] SET  READ_WRITE 
GO
