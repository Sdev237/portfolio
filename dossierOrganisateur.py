import os
import shutil
import tkinter as tk
from tkinter import filedialog, messagebox

def create_mvc_structure(folder_path):
    model_dir = os.path.join(folder_path, 'model')
    view_dir = os.path.join(folder_path, 'view')
    controller_dir = os.path.join(folder_path, 'controller')
    src_dir = os.path.join(folder_path, 'src')

    os.makedirs(model_dir, exist_ok=True)
    os.makedirs(view_dir, exist_ok=True)
    os.makedirs(controller_dir, exist_ok=True)
    os.makedirs(src_dir, exist_ok=True)

    for filename in os.listdir(folder_path):
        if filename.endswith('.html'):
            shutil.move(os.path.join(folder_path, filename), view_dir)
        elif filename.endswith('.py'):
            shutil.move(os.path.join(folder_path, filename), controller_dir)
        elif filename.endswith('Model.py'):
            shutil.move(os.path.join(folder_path, filename), model_dir)
        else:
            shutil.move(os.path.join(folder_path, filename), src_dir)

def select_folder():
    folder_path = filedialog.askdirectory()
    if folder_path:
        create_mvc_structure(folder_path)
        messagebox.showinfo("Succès", "Structure MVC créée avec succès !")

root = tk.Tk()
root.title("Création de la structure MVC")

label = tk.Label(root, text="Sélectionnez le dossier contenant les fichiers du site web :")
label.pack()

button = tk.Button(root, text="Parcourir", command=select_folder)
button.pack()

root.mainloop()
















# import tkinter as tk
# from tkinter import ttk

# class Task:
#     def __init__(self, name, deadline, assignee):
#         self.name = name
#         self.deadline = deadline
#         self.assignee = assignee

# class Project:
#     def __init__(self, name):
#         self.name = name
#         self.tasks = []

#     def add_task(self, task):
#         self.tasks.append(task)

# class BlockchainProjectManager:
#     def __init__(self):
#         self.projects = []

#     def create_project(self, name):
#         project = Project(name)
#         self.projects.append(project)
#         return project

#     def get_project_by_name(self, name):
#         for project in self.projects:
#             if project.name == name:
#                 return project
#         return None

# def display_tasks(project):
#     for task in project.tasks:
#         print(f"Tâche : {task.name}, Deadline : {task.deadline}, Assignée à : {task.assignee}")

# def main():
#     manager = BlockchainProjectManager()

#     # Créer un projet
#     project1 = manager.create_project("Projet A")

#     # Ajouter des tâches au projet
#     task1 = Task("Gestion des tâches et des deadlines", "2024-05-31", "Alice")
#     task2 = Task("Collaboration décentralisée", "2024-06-15", "Bob")
#     task3 = Task("Suivi des modifications", "2024-06-30", "Charlie")
#     task4 = Task("Gestion des ressources", "2024-07-15", "David")
#     task5 = Task("Vote et prise de décision décentralisée", "2024-07-31", "Eve")
#     task6 = Task("Traçabilité des documents et des transactions", "2024-08-15", "Frank")
#     task7 = Task("Récompenses et incitations", "2024-08-31", "Grace")

#     project1.add_task(task1)
#     project1.add_task(task2)
#     project1.add_task(task3)
#     project1.add_task(task4)
#     project1.add_task(task5)
#     project1.add_task(task6)
#     project1.add_task(task7)

#     # Afficher les tâches du projet
#     display_tasks(project1)

#     # Interface graphique
#     root = tk.Tk()
#     root.title("Gestionnaire de projets blockchain")

#     label = ttk.Label(root, text="Tâches du projet:")
#     label.pack()

#     for task in project1.tasks:
#         task_label = ttk.Label(root, text=f"Tâche : {task.name}, Deadline : {task.deadline}, Assignée à : {task.assignee}")
#         task_label.pack()

#     root.mainloop()

# if __name__ == "__main__":
#     main()
