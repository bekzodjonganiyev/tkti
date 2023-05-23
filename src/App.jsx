import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { UserLayout, AdminLayout } from "./components/layout";
import { ProtectedRoute, EditForm, ViewComponent, AddForm } from "./components";

import { AboutUs, Home } from "./pages";
import {
  Institute,
  Research,
  Pressclub,
  PressclubCreate,
  PressclubView,
  PressclubChildEdit,
  XalqaroAloqa,
  XalqaroCreate,
  XalqaroView,
  XalqaroChildEdit,
  ResearchCreate,
  ResearchView,
  ResearchChildEdit,
  Education,
  EducationView,
  EducationCreate,
  EducationChildEdit,
} from "./pages/admin";
import { Student } from "./pages/admin/student";
import { StudentChildEdit } from "./pages/admin/student/edit";
import { StudentView } from "./pages/admin/student/view";
import { StudentCreate } from "./pages/admin/student/create";
import { Qabul } from "./pages/admin/qabul";
import { QabulCreate } from "./pages/admin/qabul/create";
import { QabulChildEdit } from "./pages/admin/qabul/edit";
import { MyInstitute } from "./pages/admin/my_institute";
import { MyInstituteCreate } from "./pages/admin/my_institute/create";
import { MyInstituteEdit } from "./pages/admin/my_institute/edit";

function App() {
  return (
    <div className="h-screen">
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<h1 className="text-3xl">Loading...</h1>}>
              <UserLayout />
            </Suspense>
          }
        >
          <Route index element={<Home />} />
          <Route path="a" element={<AboutUs />} />
          <Route path="b" element={<h1 className="text-3xl">HOME B</h1>} />
        </Route>

        <Route
          path="adminPanel"
          element={
            <Suspense fallback={<h1>Loading ...</h1>}>
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            </Suspense>
          }
        >
          <Route index element={<h1 className="text-3xl">Dashboard</h1>} />

          <Route path="institute" element={<Institute />} />
          <Route path="research" element={<Research />} />

          <Route path="pressclub" element={<Pressclub />} />
          <Route path="pressclub/edit/:id" element={<PressclubChildEdit />} />
          <Route path="pressclub/view/:id" element={<PressclubView />} />
          <Route path="pressclub/add" element={<PressclubCreate />} />

          <Route path="education" element={<Education />} />
          <Route
            path="education/edit/:id"
            element={<EducationChildEdit />}
          />
          <Route path="education/view/:id" element={<EducationView/>} />
          <Route path="education/add" element={<EducationCreate />} />
          

          <Route path="int_connections" element={<XalqaroAloqa />} />
          <Route
            path="int_connections/edit/:id"
            element={<XalqaroChildEdit />}
          />
          <Route path="int_connections/view/:id" element={<XalqaroView />} />
          <Route path="int_connections/add" element={<XalqaroCreate />} />

          <Route path="students" element={<Student />} />
          <Route path="students/edit/:id" element={<StudentChildEdit />} />
          <Route path="students/view/:id" element={<StudentView />} />
          <Route path="students/add" element={<StudentCreate />} />

          <Route path="admission" element={<Qabul />} />
          <Route path="admission/edit/:id" element={<QabulChildEdit />} />
          <Route path="admission/view/:id" element={<Qabul />} />
          <Route path="admission/add" element={<QabulCreate />} />

          <Route path="my-tkti" element={<MyInstitute />} />
          <Route path="my-tkti/edit/:id" element={<MyInstituteEdit />} />
          <Route path="my-tkti/view/:id" element={<XalqaroView />} />
          <Route path="my-tkti/add" element={<MyInstituteCreate />} />

          {/* <Route path="/adminPanel/:name/add" element={<AddForm />} />
          <Route
            path="/adminPanel/:name/view/:id"
            element={<ViewComponent />}
          />
          <Route path="/adminPanel/:name/edit/:id" element={<EditForm />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
