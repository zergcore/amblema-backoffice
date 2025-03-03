import { NbMenuItem } from "@nebular/theme";
import { AuthService } from "../services/user/auth.service";
import { ALL_ACTIONS } from "../store/_shader/all-actions";

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: "Inicio",
    icon: "home-outline",
    link: "/pages/dashboard",
    home: true,
  },
  {
    title: "Roles y permisos",
    icon: "unlock-outline",
    children: [
      {
        title: "Administrar",
        link: "/pages/admin-users",
      },
      {
        title: "Roles",
        link: "/pages/permissions",
      },
    ],
  },
  {
    title: "Usuarios",
    icon: "people-outline",
    children: [
      {
        title: "Coordinadores",
        link: "/pages/coordinators-users",
      },
      {
        title: "Padrinos",
        link: "/pages/sponsors-users",
      },
      {
        title: "Escuelas",
        link: "/pages/schools-users",
      },
    ],
  },
  {
    title: "Solicitudes",
    icon: "email-outline",
    children: [
      {
        title: "Proyecto",
        icon: "briefcase-outline",
        link: "/pages/requests/project-requests",
      },
      {
        title: "Creación de usuario",
        icon: "person-add-outline",
        link: "/pages/requests/creation-requests",
      },
      {
        title: "Validar información",
        icon: "checkmark-circle-outline",
        link: "/pages/requests/requests-validate-information",
      },
      {
        title: "Confirmación AmbLeMa",
        icon: "done-all-outline",
        link: "/pages/requests/amblema-confirmation-request",
      },
    ],
  },
  {
    title: "Contenido",
    icon: "browser-outline",
    children: [
      {
        title: "Web",
        icon: "globe-outline",
        children: [
          {
            title: "Inicio",
            link: "/pages/content/web/home",
          },
          {
            title: "Nosotros",
            link: "/pages/content/web/about-us",
          },
          {
            title: "Padrinos",
            link: "/pages/content/web/sponsors",
          },
          {
            title: "Coordinadores",
            link: "/pages/content/web/coordinators",
          },
          // {
          //   title: 'Escuelas',
          //   link: '/pages/content/web/schools',
          // },
          {
            title: "Blog",
            link: "/pages/content/web/blog",
          },
        ],
      },
      {
        title: "Pasos",
        icon: "trending-up-outline",
        children: [
          {
            title: "Generales",
            link: "/pages/content/steps/generals",
          },
          {
            title: "Padrino",
            link: "/pages/content/steps/sponsor",
          },
          {
            title: "Coordinador",
            link: "/pages/content/steps/coordinator",
          },
          {
            title: "Escuela",
            link: "/pages/content/steps/school",
          },
        ],
      },
      {
        title: "Ajustes del PECA",
        icon: "settings-2-outline",
        children: [
          {
            title: "Lapso 1",
            children: [],
          },

          {
            title: "Lapso 2",
            children: [],
          },

          {
            title: "Lapso 3",
            children: [],
          },

          /* Take this special snippet into account */
          {
            title: "Configuración de metas",
            link: "/pages/content/peca-setting/goals",
          },
          {
            title: "Proyecto ambiental",
            link: "/pages/content/peca-setting/environmental-project",
          },
          {
            title: "Estrategias de actividades",
            link: "/pages/content/peca-setting/activity-strategies",
          },
          {
            title: "Período académico",
            children: [
              {
                title: "Lapsos",
                link: "/pages/content/peca-setting/admin-lapses",
              },
              {
                title: "Años escolares",
                link: "/pages/content/peca-setting/admin-year",
              },
            ],
          },
          {
            title: "Grado de instrucción docentes",
            link: "/pages/content/peca-setting/specialty",
          },
          {
            title: "Cargo docentes",
            link: "/pages/content/peca-setting/work-position",
          },
        ],
      },
      {
        title: "Temas del Pensum",
        icon: "book-open-outline",
        link: "/pages/content/learning",
      },
    ],
  },
  {
    icon: "edit-outline",
    title: "Ver proyectos",
    link: "/pages/projects",
  },

  {
    icon: "file-text-outline",
    title: "Reportes",
    children: [
      {
        title: "Reporte de diagnósticos",
        link: "/pages/report/diagnostic-report",
      },
      {
        title: "Reporte de actividades del PECA",
        link: "/pages/report/peca-report",
      },
      {
        title: "Padrinos",
        link: "/pages/report/sponsor-report",
      },
      {
        title: "Coordinadores",
        link: "/pages/report/coordinator-report",
      },
      {
        title: "Escuelas",
        link: "/pages/report/school-report",
      },
      {
        title: "Docentes",
        link: "/pages/report/teacher-report",
      },

      {
        title: "Reporte de las olimpíadas de matemáticas ",
        link: "/pages/report/math-olympics-report",
      },
      {
        title: "Escuelas inscritas",
        link: "/pages/report/enrolled-schools-report",
      },
      {
        title: "Padrinos activos - inactivos",
        link: "/pages/report/sponsor-status",
      },
    ],
  },
];
